const Footer=()=>{
    return(
        <>
        <div className="flex bg-slate-300 py-6 justify-between px-72 border">
            <div className="flex text-center">
                <p>
                @2023 Lajpat Rai Malhi <span>All Rights Resrved</span>
                </p> 
            </div>
            <div className="flex space-x-5">
                <a href="" className="hover:underline">About</a>
                <a href="" className="hover:underline">Privacy Policy</a>
                <a href="" className="hover:underline">Licensing</a>
                <a href="" className="hover:underline">Contact</a>
            </div>
        </div>
        </>
    );
}

export default Footer;