import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  tech: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  bullets?: string[];
}

export interface CardState {
  project: Project;
  index: number;
  offset: number;       // relative to active card
  isActive: boolean;
  isVisible: boolean;   // only ±2 shown
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'CHIRP - An AI Collaboration',
      description: 'CHIRP - An AI Collaboration Assistant Real-Time Chat Application!',
      tech: 'Spring Boot (Java 17), PostgreSQL, WebSocket (STOMP), Angular 19, Google Gemini 2.0 Flash API, Windsurf IDE',
      image: 'assets/chirp.png',
      codeUrl: 'https://www.linkedin.com/posts/amanp-19-tech_springboot-angular-websocket-activity-7383179193699729409-uemR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJCFDoB3Z-KKtgiUKtlSpiyNNNFdskfkA0'
    },
    {
      title: 'Food Ordering Application',
      description: 'A food ordering website where users can order food online from their favourite restaurant.',
      tech: 'HTML5, CSS3, TypeScript, Angular, MySQL, MongoDB, Java, SpringBoot',
      image: 'assets/foodie.png',
      codeUrl: 'https://github.com/Amanpan19/Foodie_WebAppFront',
    },
    {
      title: 'Weather Application',
      description: 'A real-time weather application that enables users to promptly access precise weather information for their city.',
      tech: 'HTML5, CSS3, TypeScript, Angular, OpenAPI',
      image: 'assets/weather.png',
      liveUrl: 'https://amanpan19.github.io/weatherApplication/',
      codeUrl: 'https://github.com/Amanpan19/weatherApplication',
    },
    {
      title: 'Music Web Application',
      description: 'A music playing website where users register, login, and can play songs, add to favourites, create and delete playlists.',
      tech: 'HTML5, CSS3, TypeScript, Angular',
      image: 'assets/spotify.png',
      codeUrl: 'https://github.com/Amanpan19/Music_WebApplication',
    },
    {
      title: 'CricTab',
      description: 'Your all-in-one cricket application for staying updated with the latest cricket scores, stats, and insights.',
      tech: 'HTML5, CSS3, JavaScript',
      image: 'assets/crictab.png',
      liveUrl: 'https://amanpan19.github.io/CricTab/',
      codeUrl: 'https://github.com/Amanpan19/CricTab',
    },
    {
      title: 'Juke Box',
      description: 'A contemporary JukeBox offering users an immersive real-world music experience.',
      tech: 'Java, MySQL',
      bullets: [
        'MySQL database employed for seamless data storage.',
        'JDBC facilitates Java-database interaction for robust connectivity.',
      ],
      codeUrl: 'https://github.com/Amanpan19/Juke-Box-Java-',
    },
    {
      title: 'Amphibious Vehicle',
      description: 'A prototype capable of operating on both land and water. Uses 4 DC motors with high torque, 2 DPDT switches, and fin-spoke wheels for water propulsion.',
      tech: 'Mechanical Engineering, DC Motors, DPDT Switches',
    },
  ];

  currentIndex = 0;

  get cardStates(): CardState[] {
    return this.projects.map((project, index) => {
      const offset = index - this.currentIndex;
      return {
        project,
        index,
        offset,
        isActive: offset === 0,
        isVisible: Math.abs(offset) <= 2,
      };
    });
  }

  /** CSS transform + style for each card based on its offset */
  getCardStyle(offset: number): { [key: string]: string } {
    const abs = Math.abs(offset);
    const sign = offset < 0 ? -1 : 1;

    if (abs === 0) {
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: '1',
        zIndex: '10',
        pointerEvents: 'auto',
      };
    }
    if (abs === 1) {
      return {
        transform: `translateX(${sign * 58}%) translateZ(-120px) rotateY(${sign * -22}deg) scale(0.82)`,
        opacity: '0.7',
        zIndex: '5',
        pointerEvents: 'none',
      };
    }
    if (abs === 2) {
      return {
        transform: `translateX(${sign * 95}%) translateZ(-240px) rotateY(${sign * -38}deg) scale(0.65)`,
        opacity: '0.35',
        zIndex: '2',
        pointerEvents: 'none',
      };
    }
    // hidden
    return {
      transform: `translateX(${sign * 120}%) translateZ(-300px) scale(0.5)`,
      opacity: '0',
      zIndex: '0',
      pointerEvents: 'none',
    };
  }

  get isFirst(): boolean { return this.currentIndex === 0; }
  get isLast(): boolean { return this.currentIndex === this.projects.length - 1; }

  prev(): void { if (!this.isFirst) this.currentIndex--; }
  next(): void { if (!this.isLast) this.currentIndex++; }
  goTo(i: number): void { this.currentIndex = i; }

  getTechList(tech: string): string[] {
    return tech.split(',').map(t => t.trim());
  }

  trackByIndex(index: number): number { return index; }
}