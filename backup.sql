--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2022-06-29 01:14:42 MSK

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
    "updatedAt" timestamp with time zone NOT NULL
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
-- TOC entry 3315 (class 0 OID 0)
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
-- TOC entry 3316 (class 0 OID 0)
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
-- TOC entry 3317 (class 0 OID 0)
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
-- TOC entry 3318 (class 0 OID 0)
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
-- TOC entry 3319 (class 0 OID 0)
-- Dependencies: 202
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3148 (class 2604 OID 42344)
-- Name: message id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- TOC entry 3142 (class 2604 OID 42175)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3146 (class 2604 OID 42306)
-- Name: session id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);


--
-- TOC entry 3145 (class 2604 OID 42206)
-- Name: user_roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);


--
-- TOC entry 3143 (class 2604 OID 42188)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3309 (class 0 OID 42341)
-- Dependencies: 209
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (1, 'test', 1, 10, '2022-06-28 23:41:32.37+03', '2022-06-28 23:41:32.37+03');
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (2, 'Very nice i like it!!!', 1, 10, '2022-06-28 23:41:52.834+03', '2022-06-28 23:41:52.834+03');
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (3, 'Very nice i like it!!!', 1, 10, '2022-06-28 23:52:17.9+03', '2022-06-28 23:52:17.9+03');
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (4, 'Very nice i like it!!!', 1, 10, '2022-06-29 00:07:37.145+03', '2022-06-29 00:07:37.145+03');
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (5, 'Very nice i like it!!!', 1, 10, '2022-06-29 00:08:11.519+03', '2022-06-29 00:08:11.519+03');
INSERT INTO public.message (id, value, "userId", "sessionId", "createdAt", "updatedAt") VALUES (6, 'Very nice i like it!!!', 1, 10, '2022-06-29 00:08:42.388+03', '2022-06-29 00:08:42.388+03');


--
-- TOC entry 3301 (class 0 OID 42172)
-- Dependencies: 201
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (1, 'Professor', 'Professor role', '2022-06-27 22:20:13.586+03', '2022-06-27 22:20:13.586+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (2, 'User', 'User role', '2022-06-27 22:20:20.35+03', '2022-06-27 22:20:20.35+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (3, 'Admin', 'Admin role', '2022-06-27 22:20:26.227+03', '2022-06-27 22:20:26.227+03');
INSERT INTO public.roles (id, name, description, "createdAt", "updatedAt") VALUES (4, 'Super Admin', 'Super admin role', '2022-06-27 22:20:35.541+03', '2022-06-27 22:20:35.541+03');


--
-- TOC entry 3307 (class 0 OID 42303)
-- Dependencies: 207
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (6, 'MVP and Deciding What to Build', '[SUM 22] Software Project', 'In Proccess', 2020, 10, 31, NULL, NULL, 1, '2022-06-28 14:21:49.452+03', '2022-06-28 14:21:49.466+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (7, 'MVP and Deciding What to Build', '[SUM 22] Software Project', 'In Proccess', 2020, 10, 31, NULL, NULL, 1, '2022-06-28 14:21:49.975+03', '2022-06-28 14:21:49.981+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (8, 'MVP and Deciding What to Build', '[SUM 22] Software Project', 'In Proccess', 2020, 10, 31, NULL, NULL, 1, '2022-06-28 14:21:50.524+03', '2022-06-28 14:21:50.526+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (9, 'MVP and Deciding What to Build', '[SUM 22] Software Project', 'In Proccess', 2020, 10, 31, NULL, NULL, 1, '2022-06-28 14:21:50.861+03', '2022-06-28 14:21:50.864+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (10, 'MVP and Deciding What to Build', '[SUM 22] Software Project', 'In Proccess', 2020, 10, 31, NULL, NULL, 1, '2022-06-28 14:21:51.284+03', '2022-06-28 14:21:51.286+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (12, 'Testing add with form', 'Testing add with form', 'In Proccess', 2026, 4, 6, NULL, NULL, 1, '2022-06-28 14:25:36.707+03', '2022-06-28 14:25:36.766+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (13, 'Testing add with form', 'Testing add with form', 'In Proccess', 2022, 7, 3, NULL, NULL, 1, '2022-06-28 15:35:19.603+03', '2022-06-28 15:35:19.64+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (14, 'Testing add with form', 'Testing add with form', 'In Proccess', 2022, 7, 7, NULL, NULL, 1, '2022-06-28 15:35:23.825+03', '2022-06-28 15:35:23.833+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (15, 'Testing add with form', 'Testing add with form', 'In Proccess', 2022, 7, 18, NULL, NULL, 1, '2022-06-28 15:35:26.13+03', '2022-06-28 15:35:26.137+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (16, 'Testing add with form', 'Testing add with form', 'In Proccess', 2022, 1, 7, NULL, NULL, 1, '2022-06-28 15:35:31.643+03', '2022-06-28 15:35:31.645+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (17, 'test', 'test', 'In Proccess', 2027, 6, 5, NULL, NULL, 1, '2022-06-28 16:15:05.4+03', '2022-06-28 16:15:05.478+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (18, 'Testing add with form', 'Testing add with form', 'In Proccess', 2036, 4, 4, NULL, NULL, 1, '2022-06-28 16:33:10.046+03', '2022-06-28 16:33:10.079+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (19, 'Testing add with form', 'Testing add with form', 'In Proccess', 2026, 4, 5, NULL, NULL, 1, '2022-06-29 00:32:47.734+03', '2022-06-29 00:32:47.846+03');
INSERT INTO public.session (id, "TitleCourse", "TitleSession", status, year, month, day, started, ended, "userId", "createdAt", "updatedAt") VALUES (20, 'Testing add with form', 'Testing add with form', 'In Proccess', 2028, 5, 4, NULL, NULL, 1, '2022-06-29 00:49:42.05+03', '2022-06-29 00:49:42.098+03');


--
-- TOC entry 3305 (class 0 OID 42203)
-- Dependencies: 205
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (1, 2, 1);
INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (2, 2, 2);
INSERT INTO public.user_roles (id, "roleId", "userId") VALUES (3, 2, 3);


--
-- TOC entry 3303 (class 0 OID 42185)
-- Dependencies: 203
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (1, 'test@mail.ru', '$2a$05$y.T7AbDIEzXu6YVD/FCBUeHpPBH5TSn0a.KIJc5.c4q6vSrjMexhm', false, NULL, '2022-06-28 01:01:06.861+03', '2022-06-28 01:01:06.861+03', 'Anonimus');
INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (2, 'test1@mail.ru', '$2a$05$kB.k3Hnspjforr.008NVeuF3VimWSuzobrkQYkd3nqN9joEi1P.jO', false, NULL, '2022-06-28 01:30:47.496+03', '2022-06-28 01:30:47.496+03', 'Anonimus');
INSERT INTO public.users (id, email, password, banned, "banReason", "createdAt", "updatedAt", name) VALUES (3, 'test2@mail.ru', '$2a$05$./mPAQORYCK4lwclRJJ30uFTan2Q3e1Hq3F/rgFn25dH5HNQ1Dc66', false, NULL, '2022-06-28 11:16:43.501+03', '2022-06-28 11:16:43.501+03', 'Anonimus');


--
-- TOC entry 3320 (class 0 OID 0)
-- Dependencies: 208
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 6, true);


--
-- TOC entry 3321 (class 0 OID 0)
-- Dependencies: 200
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 4, true);


--
-- TOC entry 3322 (class 0 OID 0)
-- Dependencies: 206
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.session_id_seq', 20, true);


--
-- TOC entry 3323 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_roles_id_seq', 3, true);


--
-- TOC entry 3324 (class 0 OID 0)
-- Dependencies: 202
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- TOC entry 3164 (class 2606 OID 42346)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3150 (class 2606 OID 42182)
-- Name: roles roles_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key UNIQUE (name);


--
-- TOC entry 3152 (class 2606 OID 42180)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3162 (class 2606 OID 42312)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- TOC entry 3158 (class 2606 OID 42208)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3160 (class 2606 OID 42210)
-- Name: user_roles user_roles_roleId_userId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_userId_key" UNIQUE ("roleId", "userId");


--
-- TOC entry 3154 (class 2606 OID 42198)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 3156 (class 2606 OID 42194)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3169 (class 2606 OID 42352)
-- Name: message message_sessionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT "message_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES public.session(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3168 (class 2606 OID 42347)
-- Name: message message_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT "message_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3167 (class 2606 OID 42313)
-- Name: session session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3165 (class 2606 OID 42211)
-- Name: user_roles user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3166 (class 2606 OID 42216)
-- Name: user_roles user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2022-06-29 01:14:42 MSK

--
-- PostgreSQL database dump complete
--

