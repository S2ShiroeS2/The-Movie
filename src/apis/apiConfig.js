const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "7301d8ccd16b74c80a2eb24492c5ee67",
	originalImage: (imagePath) =>
		`https://image.tmdb.org/t/p/original/${imagePath}`,
	w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`
};

export default apiConfig;
