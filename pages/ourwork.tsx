import React from "react";
import { NextPage } from "next";
import ImageHolder from "../public/image_holder.svg";
import Image from "next/legacy/image";
import HeroSection from "../components/HeroSection/HeroSection";

/* Achievement Section */
import AchievementCard from "../components/AchievementCard";

import { motion } from "framer-motion";

// Languages
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faUsers } from "@fortawesome/free-solid-svg-icons";

// variants
import { fadeUp, container, slideIn, fade } from "../variants";
import SEO from "../components/SEO/SEO";

import HEKSlogo from "../assets/partners/heks-logo.jpg";
import SANTHITlogo from "../assets/partners/santhit-logo.png";

const Ourwork: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <SEO title="Our Mission" />
      <HeroSection title="Our Vision">
        Taungthutada, TTTD envisions a rural area where each farmer is able to
        access resources and receive fair reward for their efforts in rural
        economy and our food system as a whole.
      </HeroSection>
      <section className="mx-4 sm:mx-8 lg:mx-16  bg-white">
        <motion.h3
          className="font-bold text-lg sm:text-2xl text-center my-12 sm:my-12"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
        >
          Our Achievements
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          variants={container}
          initial="initial"
          whileInView="animate"
        >
          <AchievementCard
            title="AbCD"
            description="short desc"
            imageHolder={ImageHolder}
          />
          <AchievementCard
            title="AbCD"
            description="short desc"
            imageHolder={ImageHolder}
          />
          <AchievementCard
            title="AbCD"
            description="short desc"
            imageHolder={ImageHolder}
          />
        </motion.div>

        <div>
          <h3 className="font-bold text-xl lg:text-2xl text-center mt-6">
            Our Farmer Story
          </h3>
        </div>

        {/* MOVE */}

        <div className="mt-[60px]">
          <motion.div
            className="grid grid-cols-2"
            variants={container}
            initial="initial"
            whileInView="animate"
          >
            <div className="flex justify-center">
              <motion.div variants={fadeUp}>
                <motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
                  Our Services
                </motion.h3>
                <ul className="list-disc">
                  <li>Contact Farming</li>
                  <li>Innovative Inputs Service</li>
                  <li>Business Development & Souring</li>
                </ul>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div variants={fadeUp}>
                <motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
                  Social Impact
                </motion.h3>
                <ul className="list-disc">
                  <li>Women empowerment in Supply Chain</li>
                  <li>Marginalized youths and community employment</li>
                </ul>
              </motion.div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-center">
                <motion.div variants={fadeUp}>
                  <motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
                    Finance
                  </motion.h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <div>
                        <div className="flex justify-center">
                          <FontAwesomeIcon
                            icon={faCoins}
                            className="w-[40px] text-mainColor"
                          />
                        </div>

                        <p className="text-center mt-2">
                          USD $40,000
                          <br />
                          (Grants, Equity Investment & Parnership Projects)
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <div className="flex justify-center">
                          <FontAwesomeIcon
                            icon={faUsers}
                            className="w-[40px] text-mainColor"
                          />
                        </div>
                        <p className="text-center mt-2">
                          835
                          <br />
                          (Training, Users, and Support)
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-4 sm:mx-8 lg:mx-16 bg-white"></section>
      <section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate">
          <h3 className="font-bold text-xl lg:text-2xl text-center mt-6">
            Our Partners
          </h3>
          <div className="flex justify-center flex-col md:flex-row">
            <Image
              src={HEKSlogo}
              alt="heks-logo"
              width={757.5 / 2}
              height={411.3 / 2}
              objectFit="contain"
            />
            <Image src={SANTHITlogo} alt="santhit-logo" />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

// test

export const getStaticProps = async ({ locale }: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Ourwork;
