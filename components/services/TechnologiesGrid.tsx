import Image from 'next/image';

interface Technology {
    id: number;
    name: string;
    imagePath: string;
    hoverColor: string;
    margin?: string; // Optional margin override
}

const TechnologiesGrid = () => {
    const technologies: Technology[] = [
        {
            id: 1,
            name: 'OpenAI',
            imagePath: '/assets/images/technologies/openai.png',
            hoverColor: '#FFFFFF',
        },
        {
            id: 2,
            name: 'Google Gemini',
            imagePath: '/assets/images/technologies/gemini.png',
            hoverColor: '#4285F4',
            margin: '0 0 0 0',
        },
        {
            id: 3,
            name: 'Anthropic Claude',
            imagePath: '/assets/images/technologies/anthropic.png',
            hoverColor: '#D97757',
        },
        {
            id: 4,
            name: 'Hugging Face',
            imagePath: '/assets/images/technologies/huggingface.svg',
            hoverColor: '#CCCCCC',
        },
        {
            id: 5,
            name: 'Llamaindex',
            imagePath: '/assets/images/technologies/llamaindex.png',
            hoverColor: '#000000',
        },
        {
            id: 6,
            name: 'LangChain',
            imagePath: '/assets/images/technologies/langchain.png',
            hoverColor: '#CCCCCC',
            margin: '0 0 0 0',
        },
        {
            id: 7,
            name: 'CrewAI',
            imagePath: '/assets/images/technologies/crewai.png',
            hoverColor: '#461916',
            margin: '0 0 0 0',
        },
        {
            id: 8,
            name: 'JavaScript',
            imagePath: '/assets/images/technologies/javascript.png',
            hoverColor: '#F7E016',
        },
        {
            id: 9,
            name: 'Python',
            imagePath: '/assets/images/technologies/python.png',
            hoverColor: '#4285F4',
        },
        {
            id: 10,
            name: 'Go',
            imagePath: '/assets/images/technologies/golang.png',
            hoverColor: '#00A7D2',
        },
        {
            id: 11,
            name: 'AWS',
            imagePath: '/assets/images/technologies/aws.png',
            hoverColor: '#FF9900',
            margin: '0 0 0 0',
        },
        {
            id: 12,
            name: 'Google Cloud',
            imagePath: '/assets/images/technologies/google-cloud.png',
            hoverColor: '#4285F4',
        },
        {
            id: 13,
            name: 'Azure',
            imagePath: '/assets/images/technologies/azure.png',
            hoverColor: '#0078D4',
        },
        {
            id: 14,
            name: 'Kubernetes',
            imagePath: '/assets/images/technologies/kubernetes.png',
            hoverColor: '#326CE5',
        },
    ];

    return (
        <section className="bg-white/50 py-14 dark:bg-transparent lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h4>What Technologies Do We Use?</h4>
                </div>
                {/* First Row - AI Technologies */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {technologies.map((tech) => (
                        <div key={tech.id} data-aos="fade-up" data-aos-duration="1000" className="relative group">
                            <div
                                className="flex items-center justify-center rounded-[32px] bg-gray/10 p-8 transition duration-500 hover:scale-105 hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)] relative overflow-hidden"
                                style={{
                                    backgroundColor: 'transparent',
                                    margin: tech.margin,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = tech.hoverColor;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <div className="relative w-20 h-20">
                                    <Image
                                        src={tech.imagePath}
                                        alt={tech.name}
                                        fill
                                        priority={false}
                                        className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 768px) 100px, 100px"
                                    />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                    {tech.name}
                                    {/* Tooltip arrow */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesGrid;