import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function ContactComponent() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full space-y-10 font-lunasima text-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-text_gradient">
                        Reach Me
                    </h1>
                    <p className="mt-2 text-secondary text-lg">
                        Let's get in touch or follow my work online.
                    </p>
                </div>

                <div className="space-y-2 text-textLight text-lg">
                    <p><strong className="text-primary">Name:</strong> Gianmarco Michelini</p>
                    <p><strong className="text-primary">Email:</strong> michelini.gianmarco@gmail.com</p>
                </div>

                <div className="flex justify-center gap-6 text-3xl text-primary">
                    <motion.a
                        href="https://github.com/gianmarcomichelini"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="hover:text-gradientTextEnd transition-colors"
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/gianmarco-michelini-08b5a7180/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="hover:text-gradientTextEnd transition-colors"
                    >
                        <FaLinkedin />
                    </motion.a>

                </div>

                <motion.button
                    onClick={() => navigate("/portfolio")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-2 rounded-xl bg-btngradient_primary text-primary font-semibold text-lg transition-colors hover:bg-btngradient_primary_inverted"
                >
                    Go Home
                </motion.button>
            </div>
        </div>
    );
}