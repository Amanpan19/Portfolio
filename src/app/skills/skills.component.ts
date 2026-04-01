import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  activeSkill: number = 1;

  skills = [
    {
      id: 0,
      icon: 'frontend',
      title: 'Front-end Development',
      description: 'HTML5, CSS3, Typescript(Basic), Angular, Bootstrap'
    },
    {
      id: 1,
      icon: 'backend',
      title: 'Back-end Development',
      description: 'Java, Spring Boot, Node.js, Microservices, REST APIs, AWS S3'
    },
    {
      id: 2,
      icon: 'database',
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, MongoDB'
    },
    {
      id: 3,
      icon: 'version',
      title: 'Version Control',
      description: 'Git, GitHub — managing branches, reviews & releases'
    },
    {
      id: 4,
      icon: 'responsive',
      title: 'API & Integration',
      description: 'Swagger/OpenAPI, Postman, JDBC, WebSocket, RabbitMQ, Eureka'
    },
    {
      id: 5,
      icon: 'uiux',
      title: 'Dev Tools & Workflow',
      description: 'IntelliJ, VS Code, PuTTY, WinSCP, Jira, Agile/Scrum'
    }
  ];

  setActive(id: number): void {
    this.activeSkill = id;
  }
}