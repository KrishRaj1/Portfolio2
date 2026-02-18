import { Icon } from "@iconify/react";
import IconShared from "../IconShared";

function PortfolioSection() {
  return (
    <div className="h-auto bg-white p-4 md:p-6 lg:p-8">
      <div className="min-h-20 bg-white flex justify-center items-center font-semibold text-2xl md:text-3xl lg:text-4xl">
        <div className="w-full text-center md:w-2/3 lg:w-1/3">Projects</div>
      </div>
      <div className="h-4"></div>
      <div className="h-auto bg-neutral-400 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-auto flex justify-center items-center bg-white p-4">
          <Icon icon="logos:aws" fontSize={100} />
        </div>
        <div className="w-full md:w-2/3 h-auto bg-white flex flex-col p-4 md:p-6 lg:p-8">
          <div className="font-mulish font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
            Full-Stack CI/CD &amp; Observability Pipeline
          </div>
          <div className="font-mulish text-base md:text-lg lg:text-xl mb-4">
            Built an automated CI/CD pipeline for Java/JavaScript applications deployed on AWS. The pipeline
            integrates build, test, and deployment stages, along with basic monitoring and alerting, to enable
            safe, repeatable releases and faster feedback for developers.
          </div>
          <div className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">Technologies Used:</div>
          <div className="font-semibold text-base md:text-lg lg:text-xl space-y-2">
            <div>Cloud: AWS (EC2, S3, IAM, CloudWatch)</div>
            <div>CI/CD: Jenkins, Git, GitHub</div>
            <div>Containers: Docker</div>
            <div>Languages: Java, JavaScript</div>
            <div>Practices: Infrastructure as Code, automated deployments</div>
          </div>
          <div className="flex flex-col items-start md:items-center mt-4">
            <a href="https://github.com/KrishRaj1" className="w-full max-w-xs rounded-full h-10 border-2 border-gray-400 flex items-center justify-center text-zinc-800 font-semibold mb-4 text-center">Visit</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
