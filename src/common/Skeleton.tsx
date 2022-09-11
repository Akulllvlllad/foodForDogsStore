import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
	<ContentLoader 
	speed={2}
	width={280}
	height={489}
	viewBox="0 0 280 466"
	backgroundColor="#f3f3f3"
	foregroundColor="#ecebeb"
	
>
	<rect x="0" y="0" rx="10" ry="10" width="280" height="270" />
	<rect x="0" y="280" rx="5" ry="5" width="280" height="13" />
	<rect x="0" y="315" rx="10" ry="10" width="280" height="90" /> 
	<rect x="0" y="420" rx="10" ry="10" width="90" height="45" /> 
	<rect x="135" y="420" rx="20" ry="20" width="145" height="45" /> 
	
</ContentLoader>
);
