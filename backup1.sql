--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2022-06-30 01:20:03 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 42341)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    id integer NOT NULL,
    value character varying(255) NOT NULL,
    "userId" integer,
    "sessionId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    anonim integer,
    "anonimName" character varying(255)
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 42339)
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_id_seq OWNER TO postgres;

--
-- TOC entry 3316 (class 0 OID 0)
-- Dependencies: 208
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- TOC entry 201 (class 1259 OID 42172)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 42170)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- TOC entry 3317 (class 0 OID 0)
-- Dependencies: 200
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 207 (class 1259 OID 42303)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    id integer NOT NULL,
    "TitleCourse" character varying(255) NOT NULL,
    "TitleSession" character varying(255) NOT NULL,
    status character varying(255) DEFAULT 'In Proccess'::character varying,
    year integer NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    started character varying(255),
    ended character varying(255),
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.session OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 42301)
-- Name: session_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.session_id_seq OWNER TO postgres;

--
-- TOC entry 3318 (class 0 OID 0)
-- Dependencies: 206
-- Name: session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;


--
-- TOC entry 205 (class 1259 OID 42203)
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    id integer NOT NULL,
    "roleId" integer,
    "userId" integer
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 42201)
-- Name: user_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_roles_id_seq OWNER TO postgres;

--
-- TOC entry 3319 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;


--
-- TOC entry 203 (class 1259 OID 42185)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    banned boolean DEFAULT false,
    "banReason" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    name character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 42183)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3320 (class 0 OID 0)
-- Dependencies: 202
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3149 (class 2604 OID 42344)
-- Name: message id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- TOC entry 3143 (class 2604 OID 42175)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3147 (class 2604 OID 42306)
-- Name: session id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);


--
-- TOC entry 3146 (class 2604 OID 42206)
-- Name: user_roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);


--
-- TOC entry 3144 (class 2604 OID 42188)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3310 (class 0 OID 42341)
-- Dependencies: 209
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (13, 'value', 1, NULL, '2022-06-29 13:07:21.428+03', '2022-06-29 13:07:21.428+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (14, 'value', 1, NULL, '2022-06-29 13:09:28.304+03', '2022-06-29 13:09:28.304+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (15, 'value', 1, NULL, '2022-06-29 13:09:33.298+03', '2022-06-29 13:09:33.298+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (17, 'value', 1, NULL, '2022-06-29 13:10:53.749+03', '2022-06-29 13:10:53.749+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (18, 'value', 1, NULL, '2022-06-29 13:11:28.86+03', '2022-06-29 13:11:28.86+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (19, 'value', 1, NULL, '2022-06-29 13:14:35.446+03', '2022-06-29 13:14:35.446+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (22, 'fasdf', 1, 25, '2022-06-29 21:40:27.153+03', '2022-06-29 21:40:27.153+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (23, 'fasdf', 1, 25, '2022-06-29 21:40:59.706+03', '2022-06-29 21:40:59.706+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (24, 'fasdf', 1, 25, '2022-06-29 21:41:23.581+03', '2022-06-29 21:41:23.581+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (25, 'fdsfa', 1, 21, '2022-06-29 21:42:43.382+03', '2022-06-29 21:42:43.382+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (26, 'test', 1, 21, '2022-06-29 21:43:07.617+03', '2022-06-29 21:43:07.617+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (27, 'test', 1, 21, '2022-06-29 21:43:27.641+03', '2022-06-29 21:43:27.641+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (28, 'test message', 1, 21, '2022-06-29 21:47:50.825+03', '2022-06-29 21:47:50.825+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (29, 'test bro', 1, 21, '2022-06-29 21:53:50.595+03', '2022-06-29 21:53:50.595+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (30, 'test bro', 1, 21, '2022-06-29 21:55:11.275+03', '2022-06-29 21:55:11.275+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (31, 'test bro 1', 1, 21, '2022-06-29 21:57:09.818+03', '2022-06-29 21:57:09.818+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (32, 'test bro 2', 1, 21, '2022-06-29 21:58:01.641+03', '2022-06-29 21:58:01.641+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (33, 'test message', 1, 31, '2022-06-29 22:04:45.221+03', '2022-06-29 22:04:45.221+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (34, 'test message 1', 1, 31, '2022-06-29 22:04:55.29+03', '2022-06-29 22:04:55.29+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (39, 'value', 4, NULL, '2022-06-29 23:11:29.476+03', '2022-06-29 23:11:29.476+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (40, 'value', 4, NULL, '2022-06-29 23:11:37.409+03', '2022-06-29 23:11:37.409+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (41, 'value', 4, NULL, '2022-06-29 23:11:41.92+03', '2022-06-29 23:11:41.92+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (42, 'value', NULL, NULL, '2022-06-29 23:12:28.379+03', '2022-06-29 23:12:28.379+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (43, 'value', 2, NULL, '2022-06-29 23:12:50.566+03', '2022-06-29 23:12:50.566+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (66, '1', NULL, 34, '2022-06-30 00:36:55.892+03', '2022-06-30 00:36:55.892+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (67, '2', NULL, 34, '2022-06-30 00:37:04.02+03', '2022-06-30 00:37:04.02+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (68, 'admin answer', NULL, 34, '2022-06-30 00:38:36.787+03', '2022-06-30 00:38:36.787+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (69, 'qwer', NULL, 34, '2022-06-30 00:44:30.298+03', '2022-06-30 00:44:30.298+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (70, 'test', NULL, 34, '2022-06-30 00:55:32.522+03', '2022-06-30 00:55:32.522+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (71, 'test answer', NULL, 34, '2022-06-30 00:57:04.092+03', '2022-06-30 00:57:04.092+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (72, 'test ', NULL, 34, '2022-06-30 00:57:54.584+03', '2022-06-30 00:57:54.584+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (73, 'test answer', NULL, 34, '2022-06-30 00:58:07.838+03', '2022-06-30 00:58:07.838+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (74, 'test 2', NULL, 34, '2022-06-30 00:59:01.067+03', '2022-06-30 00:59:01.067+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (75, 'test answer 2', NULL, 34, '2022-06-30 00:59:08.866+03', '2022-06-30 00:59:08.866+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (76, 'test', NULL, 34, '2022-06-30 01:01:14.826+03', '2022-06-30 01:01:14.826+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (77, 'test', NULL, 34, '2022-06-30 01:03:22.072+03', '2022-06-30 01:03:22.072+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (78, 'test', NULL, 34, '2022-06-30 01:04:32.794+03', '2022-06-30 01:04:32.794+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (79, 'test123', NULL, 34, '2022-06-30 01:04:52.206+03', '2022-06-30 01:04:52.206+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (80, 'test12345', NULL, 34, '2022-06-30 01:05:03.984+03', '2022-06-30 01:05:03.984+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (81, 'test answer 2', NULL, 34, '2022-06-30 01:05:16.099+03', '2022-06-30 01:05:16.099+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (82, 'test last', NULL, 34, '2022-06-30 01:08:07.856+03', '2022-06-30 01:08:07.856+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (83, 'data anonim', NULL, 34, '2022-06-30 01:09:02.199+03', '2022-06-30 01:09:02.199+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (84, 'test', NULL, 34, '2022-06-30 01:10:51.801+03', '2022-06-30 01:10:51.801+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (85, 'test answer 2', NULL, 34, '2022-06-30 01:10:58.419+03', '2022-06-30 01:10:58.419+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (86, '2', NULL, 34, '2022-06-30 01:11:05.361+03', '2022-06-30 01:11:05.361+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (87, '3', NULL, 34, '2022-06-30 01:11:11.599+03', '2022-06-30 01:11:11.599+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (88, '1', NULL, 35, '2022-06-30 01:13:59.581+03', '2022-06-30 01:13:59.581+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (89, 'answer 1', NULL, 35, '2022-06-30 01:14:21.181+03', '2022-06-30 01:14:21.181+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (90, '2', NULL, 35, '2022-06-30 01:14:41.061+03', '2022-06-30 01:14:41.061+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (91, 'answer 2', NULL, 35, '2022-06-30 01:14:47.949+03', '2022-06-30 01:14:47.949+03', NULL, NULL);
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt", anonim, "anonimName") VALUES (92, '1', NULL, 35, '2022-06-30 01:16:11.182+03', '2022-06-30 01:16:11.182+03', NULL, NULL);


--
-- TOC entry 3302 (class 0 OID 42172)
-- Dependencies: 201
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (1, 'Professor', 'Professor role', '2022-06-27 22:20:13.586+03', '2022-06-27 22:20:13.586+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (2, 'User', 'User role', '2022-06-27 22:20:20.35+03', '2022-06-27 22:20:20.35+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (3, 'Admin', 'Admin role', '2022-06-27 22:20:26.227+03', '2022-06-27 22:20:26.227+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (4, 'Super Admin', 'Super admin role', '2022-06-27 22:20:35.541+03', '2022-06-27 22:20:35.541+03');


--
-- TOC entry 3308 (class 0 OID 42303)
-- Dependencies: 207
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (31, 'show', 'show', 'In Proccess', 2026, 4, 3, NULL, NULL, 2, '2022-06-29 22:03:41.933+03', '2022-06-29 22:03:41.952+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (32, 'test 123', 'Testing add with form', 'In Proccess', 2025, 4, 3, NULL, NULL, 1, '2022-06-29 23:23:27.355+03', '2022-06-29 23:23:27.378+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (34, 'final', 'final', 'In Proccess', 2026, 6, 4, NULL, NULL, 2, '2022-06-30 00:36:34.95+03', '2022-06-30 00:36:34.994+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (35, 'final conf', 'final conf', 'In Proccess', 2024, 3, 4, NULL, NULL, 1, '2022-06-30 01:13:22.29+03', '2022-06-30 01:13:22.334+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (21, 'Testing add with form', 'Testing add with form', 'In Proccess', 2026, 7, 6, NULL, NULL, 1, '2022-06-29 18:27:24.272+03', '2022-06-29 18:27:24.406+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (22, 'test', 'Testing add with form', 'In Proccess', 2026, 7, 5, NULL, NULL, 1, '2022-06-29 18:27:32.236+03', '2022-06-29 18:27:32.245+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (25, 'test1', 'test1', 'In Proccess', 2024, 4, 4, NULL, NULL, 1, '2022-06-29 19:31:10.766+03', '2022-06-29 19:31:10.789+03');


--
-- TOC entry 3306 (class 0 OID 42203)
-- Dependencies: 205
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (1, 2, 1);
INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (2, 2, 2);
INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (3, 2, 3);
INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (4, 2, 4);


--
-- TOC entry 3304 (class 0 OID 42185)
-- Dependencies: 203
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (1, 'test@mail.ru', '$2a$05$y.T7AbDIEzXu6YVD/FCBUeHpPBH5TSn0a.KIJc5.c4q6vSrjMexhm', false, NULL, '2022-06-28 01:01:06.861+03', '2022-06-28 01:01:06.861+03', 'Anonimus');
INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (2, 'test1@mail.ru', '$2a$05$kB.k3Hnspjforr.008NVeuF3VimWSuzobrkQYkd3nqN9joEi1P.jO', false, NULL, '2022-06-28 01:30:47.496+03', '2022-06-28 01:30:47.496+03', 'Anonimus');
INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (3, 'test2@mail.ru', '$2a$05$./mPAQORYCK4lwclRJJ30uFTan2Q3e1Hq3F/rgFn25dH5HNQ1Dc66', false, NULL, '2022-06-28 11:16:43.501+03', '2022-06-28 11:16:43.501+03', 'Anonimus');
INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (4, 'anonim@mail.ru', '$2a$05$MnJOd3W5flsFct9HFhEY2OyWBHtwVUwn8fwdcKHLPyGp8iq9RExPa', false, NULL, '2022-06-29 23:10:15.716+03', '2022-06-29 23:10:15.716+03', 'Anonimus');


--
-- TOC entry 3321 (class 0 OID 0)
-- Dependencies: 208
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 92, true);


--
-- TOC entry 3322 (class 0 OID 0)
-- Dependencies: 200
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 4, true);


--
-- TOC entry 3323 (class 0 OID 0)
-- Dependencies: 206
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.session_id_seq', 35, true);


--
-- TOC entry 3324 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_roles_id_seq', 4, true);


--
-- TOC entry 3325 (class 0 OID 0)
-- Dependencies: 202
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 3165 (class 2606 OID 42346)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3151 (class 2606 OID 42182)
-- Name: roles roles_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key UNIQUE (name);


--
-- TOC entry 3153 (class 2606 OID 42180)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3163 (class 2606 OID 42312)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- TOC entry 3159 (class 2606 OID 42208)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3161 (class 2606 OID 42210)
-- Name: user_roles user_roles_roleId_userId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_userId_key" UNIQUE ("roleId", "userId");


--
-- TOC entry 3155 (class 2606 OID 42198)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 3157 (class 2606 OID 42194)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3170 (class 2606 OID 42352)
-- Name: message message_sessionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT "message_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES public.session(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3169 (class 2606 OID 42347)
-- Name: message message_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT "message_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3168 (class 2606 OID 42313)
-- Name: session session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3166 (class 2606 OID 42211)
-- Name: user_roles user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3167 (class 2606 OID 42216)
-- Name: user_roles user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2022-06-30 01:20:04 MSK

--
-- PostgreSQL database dump complete
--

