const DownloadResumeButton =() =>{
    return(
        <a
        href="/resume/NeerajResume.pdf"
        download
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
            Resume
        </a>
    );
};

export default DownloadResumeButton;