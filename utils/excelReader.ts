import * as xlsx from 'xlsx';

export function obtenerDatoDesdeExcel(): Record<string, string> {
  const rutaArchivo = './Data/Libro1.xlsx'; // Asegúrate de poner la ruta correcta
  const nombreHoja = 'Data';
  const columnas = ['Correo', 'Clave']; // Especifica las columnas que deseas obtener

  const workbook = xlsx.readFile(rutaArchivo);
  const worksheet = workbook.Sheets[nombreHoja];
  const datos = xlsx.utils.sheet_to_json<Record<string, any>>(worksheet);

  // Extraer los primeros valores de las columnas especificadas
  const valores: Record<string, string> = {};
  columnas.forEach(columna => {
    valores[columna] = datos[0]?.[columna] || '';
  });

  return valores;
}