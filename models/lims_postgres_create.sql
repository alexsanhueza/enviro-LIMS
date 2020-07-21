-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

CREATE TABLE methods (
    "_id" serial NOT NULL,
    "epa_method" varchar NOT NULL, 
    "instrumentation" varchar NOT NULL, 
    "method_description" varchar NOT NULL,
    "extraction_solvent" varchar NOT NULL,
    "department" varchar NOT NULL, 
    CONSTRAINT "methods_pk" PRIMARY KEY ("_id")
);

INSERT INTO methods VALUES(DEFAULT, '524', 'GC-MS P&T', 'Volatile Organic Analysis by Purge-and-Trap GC-MS', 'none', 'Volatiles');
INSERT INTO methods VALUES(DEFAULT, '504', 'GC-ECD', 'Disinfection Byproducts by GC and Micro-extraction', 'MTBE', 'Semi-Volatiles');
INSERT INTO methods VALUES(DEFAULT, '300', 'IC', 'Anions by Ion Chromatography', 'none', 'Inorganics');
INSERT INTO methods VALUES(DEFAULT, 'PPCP', 'LC-MS-MS', 'Pharmaceuticals and Cosmetics by Triple-Quadrupole LC-MS', 'none', 'Liquid Chromatography');
INSERT INTO methods VALUES(DEFAULT, '8015 DRO', 'GC-FID', 'Diesel Range Organics and Motor Oil by GC-FID', 'MeCl2', 'Semi-Volatiles');
INSERT INTO methods VALUES(DEFAULT, '552', 'GC-ECD', 'Haloacetic Acids in Drinking Water by GC and Micro-extraction', 'MTBE', 'Semi-Volatiles');

