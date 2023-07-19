-- CreateTable
CREATE TABLE "Invernaderos" (
    "dniUser" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "idInvernadero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Productos" (
    "idInvernadero" TEXT PRIMARY KEY,
    "productos" TEXT NOT NULL,
    "madurez" TEXT NOT NULL,
    "fechaPlantacion" TEXT NOT NULL,
    "coords" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "nombreApellidos" TEXT,
    "correo" TEXT NOT NULL,
    "telefono" INTEGER,
    "pass" TEXT NOT NULL,
    "dni" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT,
    "verify" INTEGER DEFAULT 0,
    "imagen" TEXT
);

