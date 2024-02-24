"use client";

import { ContentTitle } from "@/components/atoms/contents-title";
import styles from "./contents.module.css";
import { Header } from "@/components/molecules/header";
// import Image from "next/image";
// import users from "./assets/Users.png";
import React from "react";
import Image from "next/image";
import more from "./assets/more.png";
import grocery from "./assets/grocery.png";
import transportation from "./assets/transportation.png";
import housing from "./assets/housing.png";
import food from "./assets/food.png";
import entertainment from "./assets/entertainment.png";
import Link from "next/link";
import { Item } from "@/components/molecules/item";
import { Summary } from "../summary";

export const Contents = () => {
  return (
    <main className={styles.main}>
      <div className={`p-400`}>
        <Header>
          <div>
            <ContentTitle>Expenses</ContentTitle>
            <span className={styles.range}>01 - 25 March, 2020</span>
          </div>
          <div className={styles.alignItems}>
            {/* <Image src={users} width={128} height={37} alt="users" /> */}
          </div>
        </Header>
        <div>
          <h4 className={styles.title}>
            <span className={styles.label}>Today</span> 
            <span className={styles.align}>
              <Link href="#"><Image src={more} width={25} height={5} alt="More" /></Link>
            </span>
          </h4>
          <div className={styles.grid}>
            <Item dp={grocery} label="Grocery" location="5:12 pm  •  Belanja di pasar" cost="-326.800" />
            <Item dp={transportation} label="Transportation" location="5:12 pm  •  Naik bus umum" cost="-15.000" />
            <Item dp={housing} label="Housing" location="5:12 pm  •  Bayar Listrik" cost="-185.750" />
          </div>
          <h4 className={styles.title}>
            <span className={styles.label}>Monday, 23 March 2020</span> 
            <span className={styles.align}>
              <Link href="#"><Image src={more} width={25} height={5} alt="More" /></Link>
            </span>
          </h4>
          <div className={styles.grid}>
            <Item dp={food} label="Food and Drink" location="5:12 pm  •  Makan Steak" cost="-156.000" />
            <Item dp={entertainment} label="Entertainment" location="5:12 pm  •  Nonton Bioskop" cost="-35.200" />
          </div>
        </div>
      </div>
      <Summary />
    </main>
  )
}