"use client";

import { useEffect, useState } from "react";
import { Cloud } from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

// Icon mapping for common slugs to their simple-icons names
const iconMapping: Record<string, string> = {
  typescript: "siTypescript",
  javascript: "siJavascript",
  react: "siReact",
  nextdotjs: "siNextdotjs",
  nodedotjs: "siNodedotjs",
  html5: "siHtml5",
  css3: "siCss3",
  git: "siGit",
  github: "siGithub",
  gitlab: "siGitlab",
  docker: "siDocker",
  postgresql: "siPostgresql",
  firebase: "siFirebase",
  amazonaws: "siAmazonaws",
  vercel: "siVercel",
  figma: "siFigma",
  visualstudiocode: "siVisualstudiocode",
  androidstudio: "siAndroidstudio",
  flutter: "siFlutter",
  dart: "siDart",
  java: "siOpenjdk",
  android: "siAndroid",
  express: "siExpress",
  prisma: "siPrisma",
  nginx: "siNginx",
  testinglibrary: "siTestinglibrary",
  jest: "siJest",
  cypress: "siCypress",
  jira: "siJira",
  sonarqube: "siSonarqube"
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        // Dynamically import simple-icons
        const simpleIcons = await import("simple-icons");
        
        const loadedIcons = iconSlugs.map((slug) => {
          // Try mapped name first, then try converting slug
          const iconKey = iconMapping[slug] || `si${slug.charAt(0).toUpperCase()}${slug.slice(1).replace(/[^a-zA-Z0-9]/g, '')}`;
          const icon = (simpleIcons as any)[iconKey];
          
          if (!icon) {
            console.warn(`Icon not found for slug: ${slug}`);
            return null;
          }

          return (
            <div
              key={slug}
              title={icon.title}
              style={{
                display: "inline-block",
                width: 42,
                height: 42,
                color: `#${icon.hex}`,
              }}
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          );
        });

        setIcons(loadedIcons.filter(Boolean) as JSX.Element[]);
      } catch (error) {
        console.error("Failed to load icons:", error);
        // Fallback: create simple colored divs
        const fallbackIcons = iconSlugs.map((slug, index) => (
          <div
            key={slug}
            title={slug}
            style={{
              display: "inline-block",
              width: 42,
              height: 42,
              backgroundColor: `hsl(${(index * 360) / iconSlugs.length}, 70%, 50%)`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {slug.slice(0, 2).toUpperCase()}
          </div>
        ));
        setIcons(fallbackIcons);
      }
    };

    loadIcons();
  }, [iconSlugs]);

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
    >
      {icons}
    </Cloud>
  );
}