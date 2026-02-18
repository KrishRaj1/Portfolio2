import SkillCardIcon from "./SkillCardIcon";

function SkillSection() {
    return (
        <div className="py-10 px-4 lg:px-8">
            <div className="w-full flex items-center justify-center mb-6">
                <div className="font-mulish font-semibold text-2xl md:text-3xl">Cloud &amp; DevOps Skills</div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
                <SkillCardIcon src={"logos:aws"} text={"AWS"} />
                <SkillCardIcon src={"logos:terraform-icon"} text={"Terraform"} />
                <SkillCardIcon src={"logos:jenkins"} text={"Jenkins"} />
                <SkillCardIcon src={"logos:docker-icon"} text={"Docker"} />
                <SkillCardIcon src={"logos:kubernetes"} text={"Kubernetes"} />
                <SkillCardIcon src={"logos:linux-tux"} text={"Linux"} />
                <SkillCardIcon src={"mdi:git"} text={"Git & GitHub"} />
                <SkillCardIcon src={"devicon:java-wordmark"} text={"Java"} />
                <SkillCardIcon src={"fluent:javascript-16-regular"} text={"JavaScript"} />
                <SkillCardIcon src={"mdi:cog-play-outline"} text={"CI/CD Automation"} />
            </div>
        </div>
    );
}

export default SkillSection;
