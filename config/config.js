
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Suma Sree",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Suma Sree",
	description: "Final year Computer Science undergrad at NIT, Raipur",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1cQFnBqrSaj7-VxaXwOHTL7Yn-AUWhPIM/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm an undergraduate from National Institute of Technology (NIT), Raipur pursuing my bachelors in Computer Engineering. I am enthusiast in Competitive programming. ",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind.",
		"When I’m not programming, I focus on my hobbies which are: content writing,reading non-fiction books, exploring WEB3, meeting people and growing my network.",
	],
}

export const work = {
	title: "My Technical Skills",
	cards: [
		{
			title: "DSA - problem solving",
			description: "Problem solving using various Data Structures and Algorithms using C++ programming language. Competitive Programming enthusiast",
			icons: null,
		},

		{
			title: "Web Development",
			description: "I create responsive static websites using HTML, CSS, JS and using frameworks like bootstrap, react. Also backend tools like node.js, Mysql, Django etc",
			icons: null,
		},
		{
			title: "Python programming",
			description: "Using various libraries of Python, like tkinter, pandas etc, I make some interesting applications.",
			icons: null,
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Note-Scribe with Authentication and added Privacy",
			description: "Web application which takes your note and stores it in the database for future reference, with additional privacy and google's authentication. Designed using HTML, CSS, JS, Express.js, node.js & mongoDB",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/SumaSreeVemuri/Mind-Script",
				},
			]
		},
		{
			title: "Wise-wallet",
			description: "A web application which is used to track expenses. Designed using HTML, CSS, Java Script",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/SumaSreeVemuri/Wise-Wallet",
				},
			]
		},
		{
			title: "tic-tac-toe",
			description: "Basic X/O or tic-tac-toe application for having some fun with your buddies. The application consists of a simple grid which should be filled with X's or O's whoever completes a straight line across the grid either horizontally, vertically or diagnolly shall win.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/SumaSreeVemuri/Tic-Tac-Toe",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/SumaSreeVemuri/Personal-Portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Chat with me anytime! Alternatively, feel free to reach out directly by email at sumasreevemuri23@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:sumasreevemuri23@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Vemuri Suma Sree| Computer Science Engineer | Competitive Programmer | Web developer",
	description: "I create static websites & solve DSA problems. I am pursuing my bachelors in Computer Science in National Institute of Technology(NIT), Raipur.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@sumasreevemuri",
	description: "Computer Science Engineer | Competitive Programmer | Web Developer",
	cards: [
		{
			title: "My website",
			link: "",
		},
		{
			title: "My GitHub",
			link: "https://github.com/SumaSreeVemuri",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/suma-sree-vemuri-850a41212/",
		},
	]
}