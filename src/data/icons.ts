import React from "react";
import {
  Wrench,
  Database,
  Server,
  Globe,
  Settings,
  Code2,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiJsonwebtokens,
  SiVite,
  SiFramer,
  SiAxios,
  SiReactrouter,
  SiSocketdotio,
} from "react-icons/si";

// ── Icon Mapping Helper ────────────────────────────────────
export const getIconForSkill = (skillName: string): React.ElementType => {
  const name = skillName.toLowerCase();
  
  if (name.includes("react")) return SiReact;
  if (name.includes("typescript")) return SiTypescript;
  if (name.includes("javascript")) return SiJavascript;
  if (name.includes("html")) return SiHtml5;
  if (name.includes("css")) return SiCss;
  if (name.includes("tailwind")) return SiTailwindcss;
  if (name.includes("figma")) return SiFigma;
  if (name.includes("node")) return SiNodedotjs;
  if (name.includes("express")) return SiExpress;
  if (name.includes("php")) return SiPhp;
  if (name.includes("mongodb") || name.includes("mongoose")) return SiMongodb;
  if (name.includes("mysql")) return SiMysql;
  if (name.includes("postgresql")) return SiPostgresql;
  if (name.includes("git")) return SiGit;
  if (name.includes("postman")) return SiPostman;
  if (name.includes("vite")) return SiVite;
  if (name.includes("jwt")) return SiJsonwebtokens;
  if (name.includes("framer")) return SiFramer;
  if (name.includes("axios")) return SiAxios;
  if (name.includes("router")) return SiReactrouter;
  if (name.includes("socket")) return SiSocketdotio;
  if (name.includes("cursor")) return MousePointer2;
  if (name.includes("antigravity")) return Sparkles;
  if (name.includes("api")) return Globe;
  if (name.includes("database") || name.includes("sql")) return Database;
  if (name.includes("server")) return Server;
  if (name.includes("code")) return Code2;
  if (name.includes("auth")) return Settings;
  
  return Wrench;
};

export const getColorForSkill = (skillName: string): string => {
  const name = skillName.toLowerCase();
  if (name.includes("react")) return "#61DAFB";
  if (name.includes("typescript")) return "#3178C6";
  if (name.includes("javascript")) return "#F7DF1E";
  if (name.includes("html")) return "#E34F26";
  if (name.includes("css")) return "#1572B6";
  if (name.includes("tailwind")) return "#06B6D4";
  if (name.includes("figma")) return "#F24E1E";
  if (name.includes("node")) return "#339933";
  if (name.includes("express")) return "#808080";
  if (name.includes("php")) return "#777BB4";
  if (name.includes("mongodb") || name.includes("mongoose")) return "#47A248";
  if (name.includes("mysql")) return "#4479A1";
  if (name.includes("postgresql")) return "#4169E1";
  if (name.includes("microsoft sql server")) return "#CC2927";
  if (name.includes("git")) return "#F05032";
  if (name.includes("postman")) return "#FF6C37";
  if (name.includes("vite")) return "#646CFF";
  if (name.includes("jwt")) return "#fb015b";
  if (name.includes("framer")) return "#0055FF";
  if (name.includes("axios")) return "#5A29E4";
  if (name.includes("router")) return "#CA4245";
  if (name.includes("socket")) return "#010101";
  if (name.includes("cursor")) return "#000000";
  if (name.includes("antigravity")) return "#8B5CF6";
  return "#3b82f6";
};
