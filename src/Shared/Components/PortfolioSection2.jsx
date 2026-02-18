import { Icon } from "@iconify/react";
import IconShared from "../IconShared";

function PortfolioSection2() {
  return (
    <div className="h-auto bg-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row h-auto">
        <div className="w-full md:w-1/3 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <Icon icon="mdi:cloud-outline" fontSize={90} className="md:fontSize-110 lg:fontSize-140" />
        </div>
        <div className="w-full md:w-2/3 h-auto bg-white flex flex-col p-4 md:p-6 lg:p-8">
          <div className="font-mulish font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
            Automated High-Availability AWS Infrastructure
          </div>
          <div className="font-mulish text-base md:text-lg lg:text-xl mb-4">
            Provisioned a fault-tolerant AWS architecture using Terraform, featuring VPC, public and private
            subnets, Application Load Balancers, Auto Scaling Groups, and managed databases. The infrastructure
            is defined as code, making it easy to spin up staging and production environments consistently.
          </div>
          <div className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">Technologies Used:</div>
          <div className="font-semibold text-base md:text-lg lg:text-xl space-y-2">
            <div>Cloud: AWS (VPC, EC2, RDS, ALB, Auto Scaling)</div>
            <div>Infrastructure as Code: Terraform</div>
            <div>OS &amp; Automation: Linux, Bash</div>
            <div>Version Control: Git and GitHub</div>
          </div>
          <div className="flex flex-col items-start md:items-center mt-4">
            <a href="https://github.com/KrishRaj1" className="w-full max-w-xs rounded-full h-10 border-2 border-gray-400 flex items-center justify-center text-zinc-800 font-semibold mb-4 text-center">Visit</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection2;
