"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud } from "react-icon-cloud";
import { SimpleIcon } from "simple-icons";

export type DynamicCloudProps = {
  iconSlugs: string[]; // e.g., ["react", "typescript", "github"]
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [icons, setIcons] = useState<JSX.Element[] | null>(null);
  const { theme } = { theme: "dark" }; // Replace with useTheme() if needed

  useEffect(() => {
    const loadedIcons = iconSlugs.map((slug) => {
      const icon = SimpleIcon.Get(slug); // `simple-icons` API
      if (!icon) return null;

      return (
        <a
          key={slug}
          href="#"
          title={icon.title}
          onClick={(e) => e.preventDefault()}
          style={{
            display: "inline-block",
            width: 42,
            height: 42,
          }}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      );
    });

    setIcons(loadedIcons.filter(Boolean) as JSX.Element[]);
  }, [iconSlugs, theme]);

  return (
    <Cloud
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
      containerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: 40,
        },
      }}
      {...({ children: icons } as any)}
    >
      {icons}
    </Cloud>
  );
}
