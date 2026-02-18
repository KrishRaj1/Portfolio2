import { Icon } from "@iconify/react";
import IconShared from "../IconShared";
import { Link } from "react-router-dom";

function PortfolioSection3() {
    return (
        <>
            <div className="h-10 w-full"></div>
            <div className="h-auto bg-white flex flex-col lg:flex-row mx-4 lg:mx-16 mb-10">
                <div className="w-full lg:w-1/3 h-auto flex justify-center items-center bg-white p-4 lg:p-6">
                    <Icon icon="mdi:server-network-outline" fontSize={100} className="lg:fontSize-120" />
                </div>
                <div className="w-full lg:w-2/3 bg-white flex flex-col p-4 lg:p-6">
                    <div className="font-mulish font-semibold text-2xl lg:text-3xl mb-4">
                        Cloud &amp; DevOps Portfolio
                    </div>
                    <div className="font-mulish text-base lg:text-lg mb-4">
                        Welcome to my Cloud &amp; DevOps portfolio, where I showcase projects focused on AWS
                        infrastructure, CI/CD automation, containerization, and observability. Each project is designed
                        to highlight how I use tools like Terraform, Jenkins, Docker, Kubernetes, and CloudWatch to
                        build reliable and scalable systems.
                    </div>
                    <div className="font-semibold text-lg lg:text-xl mb-4">Technologies Used:</div>
                    <div className="font-semibold text-base lg:text-lg space-y-2">
                        <div>Cloud: AWS</div>
                        <div>DevOps: Terraform, Jenkins, Docker, Kubernetes</div>
                        <div>Frontend: React, Tailwind CSS</div>
                        <div>Version Control: Git and GitHub</div>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full flex flex-col items-center p-4 lg:p-6 mt-10">
                <div className="font-semibold text-xl lg:text-2xl mb-4">For other Projects!</div>
                <Link to='https://github.com/KrishRaj1'>
                    <div className="border-2 border-gray-400 text-black h-10 w-40 lg:w-48 mt-5 font-semibold flex items-center justify-center rounded-full cursor-pointer">
                        Click Here
                    </div>
                </Link>
            </div>
        </>
    );
}

export default PortfolioSection3;
