import { Icon } from "@iconify/react";

function SkillCardIcon({ text, src }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 m-2 md:m-4">
            <div className="flex items-center justify-center">
                <Icon
                    icon={src}
                    style={{
                        width: "56px",
                        height: "56px",
                    }}
                    fontSize={48}
                />
            </div>
            <div className="font-mulish font-semibold text-sm md:text-base text-black text-center">
                {text}
            </div>
        </div>
    );
}

export default SkillCardIcon;
