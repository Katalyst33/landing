import ProjectComponent from './ProjectComponent.jsx';
function ProjectList({...props}) {

  const projects = props.data.data;



  return (
      <div>
        <ul className={`grid grid-cols-1 md:grid-cols-2  gap-10 `}>
          {projects.map((project, index) => (
              <div key={index}>
                <div>
                  <ProjectComponent data={project}/>
                </div>
              </div>
          ))}
        </ul>
      </div>
  );
}

export default ProjectList;
