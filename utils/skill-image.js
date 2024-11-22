import angular from '/public/svg/skills/angular.svg';
import azure from '/public/svg/skills/azure.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import nginx from '/public/svg/skills/nginx.svg';
import typescript from '/public/svg/skills/typescript.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    default:
      break;
  }
}
