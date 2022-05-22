import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/gm_t_02.png" width={64} height={64} />
            </div>
        </nav>
    );
}

export default Navbar;