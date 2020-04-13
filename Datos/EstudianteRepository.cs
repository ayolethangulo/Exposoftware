using System;
using Entity;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Datos
{
    public class EstudianteRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Estudiante> _estudiantes = new List<Estudiante>();
        public EstudianteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }
        public void Guardar(Estudiante estudiante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Estudiante (Identificacion,PrimerNombre,SegundoNombre,PrimerApellido,"+
                                                    "SegundoApellido,Celular,Correo)"+
                                        "values (@Identificacion,@PrimerNombre,@SegundoNombre,@PrimerApellido,@SegundoApellido,"+
                                        "@Celular,@Correo)";
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.Parameters.AddWithValue("@PrimerNombre", estudiante.PrimerNombre);
                command.Parameters.AddWithValue("@SegundoNombre", estudiante.SegundoNombre);
                command.Parameters.AddWithValue("@PrimerApellido", estudiante.PrimerApellido);
                command.Parameters.AddWithValue("@SegundoApellido", estudiante.SegundoApellido);
                command.Parameters.AddWithValue("@Celular", estudiante.Celular);
                command.Parameters.AddWithValue("@Correo", estudiante.Correo);
                var filas = command.ExecuteNonQuery();
            }
        }

    }
}