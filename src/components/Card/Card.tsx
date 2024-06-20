import "./Card.css";

export interface CardProps {
	href: string;
	children: any;
}

export default function Card({ href, children }: CardProps) {
	return <li className='card'>{children}</li>;
}
