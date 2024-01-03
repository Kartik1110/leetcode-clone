import Docker, { Container } from "dockerode";

/* 
  The DockerManagerService class provides methods to create, start, execute scripts, and stop Docker
  containers. 
*/
class DockerManagerService {
  private docker: Docker;
  private container: Container | null;
  constructor() {
    this.docker = new Docker();
    this.container = null;
  }

  async createContainer(
    imageName: string,
    containerName: string,
    port: { [key: string]: { [key: string]: string }[] }
  ) {
    this.container = await this.docker.createContainer({
      name: containerName,
      Image: imageName,
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
      ExposedPorts: { "3000/tcp": {} },
      HostConfig: {
        PortBindings: port,
      },
    });
  }

  async startContainer() {
    if (this.container) {
      await this.container.start();
    } else {
      throw new Error("Container not created. Call createContainer() first.");
    }
  }

  async executeNodeScript(script: string): Promise<string> {
    if (this.container) {
      const exec = await this.container.exec({
        Cmd: ["node", "-e", script],
        AttachStdout: true,
        AttachStderr: true,
      });

      const execStream = await exec.start({ hijack: true });

      let finalResult = "";

      // Log the output of the command
      execStream.on("data", (chunk) => {
        finalResult += chunk;
      });

      // Wait for the command to complete
      await new Promise((resolve) => execStream.on("end", resolve));

      return finalResult;
    } else {
      throw new Error("Container not created. Call createContainer() first.");
    }
  }

  async stopContainer() {
    if (this.container) {
      await this.container.stop();
    } else {
      throw new Error("Container not created. Call createContainer() first.");
    }
  }
}

export default DockerManagerService;
