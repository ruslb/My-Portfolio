import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SkrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.skrollTo(0, 0);
}, [pathname]);

return null;
}