using System;
using Entity;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Datos
{
    public class ProyectoRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Proyecto> _proyectos = new List<Proyecto>();
        public ProyectoRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }
        public void Guardar(Proyecto proyecto)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Proyecto (Identificacion,Estudiante,Asignatura,Nombre,Semestre,Resumen,"+
                                                    "Metodologia,Resultados,Estado)"+
                                        "values (@Identificacion,@Estudiante,@Asignatura,@Nombre,@Semestre,@Resumen,"+
                                        "@Metodologia,@Resultados,@Estado)";
                command.Parameters.AddWithValue("@Identificacion", proyecto.Identificacion);
                command.Parameters.AddWithValue("@Estudiante", proyecto.Estudiante);
                command.Parameters.AddWithValue("@Asignatura", proyecto.Asignatura);
                command.Parameters.AddWithValue("@Nombre", proyecto.Nombre);
                command.Parameters.AddWithValue("@Semestre", proyecto.Semestre);
                command.Parameters.AddWithValue("@Resumen", proyecto.Resumen);
                command.Parameters.AddWithValue("@Metodologia", proyecto.Metodologia);
                command.Parameters.AddWithValue("@Resultados", proyecto.Resultados);
                command.Parameters.AddWithValue("@Estado", proyecto.Estado);
                var filas = command.ExecuteNonQuery();
            }
        }
        
    }
}