import TechnologyCard from './TechnologyCard';

export default function TechnologyGrid({ technologies, isAddedChecker, onToggleStack }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={isAddedChecker ? isAddedChecker(tech.id) : false}
          onToggleStack={onToggleStack}
        />
      ))}
    </div>
  );
}
