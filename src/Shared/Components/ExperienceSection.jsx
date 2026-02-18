import { Icon } from "@iconify/react";

function ExperienceSection() {
  return (
    <div className="h-auto bg-white p-4 md:p-6 lg:p-8">
      <div className="min-h-20 bg-white flex justify-center items-center font-semibold text-2xl md:text-3xl lg:text-4xl">
        <div className="w-full text-center md:w-2/3 lg:w-1/3">Experience</div>
      </div>
      <div className="h-auto bg-white flex flex-col md:flex-row mt-4">
        <div className="w-full md:w-1/3 h-full flex justify-center items-start bg-white p-4 pt-0 md:pt-14">
          <Icon icon="mdi:briefcase-outline" fontSize={80} />
        </div>
        <div className="w-full md:w-2/3 h-auto bg-white flex flex-col p-4 md:p-6 lg:p-8 space-y-3">
          <div className="font-mulish font-semibold text-xl md:text-2xl">
            Associate DevOps Engineer – Indus Valley Partners
          </div>
          <div className="font-mulish text-sm md:text-base text-gray-600">
            Dec 2024 – Present · Noida, India
          </div>
          <div className="font-mulish text-base md:text-lg text-gray-800">
            Working on AWS-based infrastructure, Infrastructure as Code, CI/CD automation, and observability to
            support reliable and scalable application delivery.
          </div>
          <ul className="list-disc list-inside font-mulish text-sm md:text-base text-gray-800 space-y-1">
            <li>Provisioned scalable AWS environments using Terraform, reducing manual setup time and drift.</li>
            <li>Built and maintained CI/CD pipelines with Jenkins and Git to automate build, test, and deployment.</li>
            <li>Containerized services with Docker and supported Kubernetes-based deployments.</li>
            <li>Improved monitoring and alerting using AWS CloudWatch to maintain high system availability.</li>
            <li>Applied IAM best practices and least-privilege policies to strengthen cloud security.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;

