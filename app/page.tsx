import { Aside } from "@/components/organisms/aside";
import { Contents } from "@/components/organisms/contents";
import { Grid } from "@/components/utils/grid";
import React from "react";

export default function Home() {
  return (
    <main>
      <Grid>
        <Aside />
        <Contents />
      </Grid>
    </main>
  )
}
