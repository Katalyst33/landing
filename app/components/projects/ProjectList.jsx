import { useState, useEffect } from 'react';
import ProjectComponent from './ProjectComponent.jsx';
import { LoadingBlog } from '../LoadingBlog.jsx';
function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.serverUrl}/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {projects.length > 0 ? (
        <ul className={`grid grid-cols-1 md:grid-cols-2  gap-10 `}>
          {projects.map((project, index) => (
            <div key={index}>
              <div>
                <ProjectComponent data={project} />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <LoadingBlog />
      )}
    </div>
  );
}

export default ProjectList;
