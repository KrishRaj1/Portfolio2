import PortfolioSection from "../Shared/Components/PortflioSection";
import PortfolioSection2 from "../Shared/Components/PortfolioSection2";
import PortfolioSection3 from "../Shared/Components/PortfolioSection3";
import ExperienceSection from "../Shared/Components/ExperienceSection";

function Project() {
  return (
    <div className="px-4 md:px-8 lg:px-16 space-y-12">
      <ExperienceSection />
      <PortfolioSection />
      <PortfolioSection2 />
      <PortfolioSection3 />
    </div>
  );
}

export default Project;
