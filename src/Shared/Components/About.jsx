import AboutLower from "./AboutLower";

function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col items-center py-12 px-4 md:px-8">
        <div className="font-semibold text-3xl md:text-3xl lg:text-3xl mb-4">About</div>
        <div className="text-lg md:text-xl lg:text-xl font-semibold text-center max-w-4xl space-y-4">
            <div>
              I am a Cloud &amp; DevOps Engineer focused on building reliable, scalable infrastructure on AWS
              and automating everything from provisioning to deployment. I enjoy turning manual, error-prone
              processes into robust pipelines using tools like Terraform, Jenkins, Docker, and Kubernetes.
            </div>
            <div>
              My goal is to help engineering teams ship faster and safer by improving CI/CD, observability, and
              security. I am always learning and experimenting with new DevOps practices to make cloud
              environments more efficient and cost-effective.
            </div>
          <div className="text-base md:text-lg lg:text-lg font-semibold pt-2">
            AWS Certified Cloud Practitioner (CCP).
          </div>
          </div>
        </div>

      <div className="bg-black text-white flex justify-center items-center">
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4 py-8 gap-4">
          <a
            href="mailto:shivharekrishraj@gmail.com"
            className="hover:opacity-90 w-full"
            aria-label="Email"
          >
            <AboutLower icon={"logos:google-gmail"} text={"shivharekrishraj@gmail.com"} fontSize={16} />
          </a>
          <a
            href="tel:+917417167355"
            className="hover:opacity-90 w-full"
            aria-label="Phone"
          >
            <AboutLower icon={"noto:mobile-phone"} text={"7417167355"} fontSize={22} />
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Noida%2C%20UP"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-90 w-full"
            aria-label="Location"
          >
            <AboutLower icon={"logos:google-maps"} text={"Noida, UP"} fontSize={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
