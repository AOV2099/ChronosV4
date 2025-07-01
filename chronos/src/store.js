 import { LayoutDashboard, CalendarSearch, GraduationCap, BookA, ClipboardPlus, BookOpen, Bolt, FileSearch, LogOut } from "lucide-svelte";
import { writable } from "svelte/store";


export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
export const HORARIO_URL = `${API_BASE_URL}/cargar-horario`;
export const ASIGNATURAS_URL = `${API_BASE_URL}/cargar-asignaturas`;
export const PROFESORES_URL = `${API_BASE_URL}/cargar-profesores`;

export const SIDEBAR_ITEMS = {
  GENERAL:        { label: "General",        icon: LayoutDashboard },
  HORARIOS:       { label: "Horarios",       icon: CalendarSearch },
  ACADEMICOS:     { label: "Académicos",     icon: GraduationCap },
  ASIGNATURAS:    { label: "Asignaturas",    icon: BookA },
  REPORTES:       { label: "Reportes",       icon: ClipboardPlus },
  FORMATOS:       { label: "Formatos",       icon: BookOpen },
  CONFIGURACION:  { label: "Configuración",  icon: Bolt },
  DOCUMENTACION:  { label: "Documentación",  icon: FileSearch },
  CERRAR_SESION:  { label: "Cerrar sesión",  icon: LogOut }
};


export const selectedSidebarItem = writable( SIDEBAR_ITEMS.ACADEMICOS );
