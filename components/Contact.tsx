'use client'

import { motion } from 'framer-motion'

export const Contact = () => {
    return (
        <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4 overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-white'
                    >
                        Get in <span className='text-purple-400'>Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a 
                                href="tel:+85512319348"
                                className="text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                +855 12 319 348
                                <span className="text-gray-500"></span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a 
                                href="mailto:monireach36@gmail.com"
                                className="text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                monireach36@gmail.com
                                <span className="text-gray-500"></span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Address</p>
                            <address className="text-xl not-italic leading-relaxed">
                                1011B Phnom Penh<br />
                                The Cambodia
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                    <iframe
                        src="https://maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509811!2d144.9537353153154!3d-37.816279979751656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f8cd%3A0x5045675218ce6e0!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1616168161972!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Google Map"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}