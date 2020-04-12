using System;
using Datos;
using Entity;
using System.Collections.Generic;

namespace Logica
{
    public class EstudianteService
    {
        private readonly ConnectionManager _conexion;
        private readonly EstudianteRepository _repositorio;

        public EstudianteService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new EstudianteRepository(_conexion);
        }
        
        public GuardarEstudianteResponse Guardar(Estudiante estudiante)
        {
            try
            {
                _conexion.Open();
                _repositorio.Guardar(estudiante);
                _conexion.Close();
                return new GuardarEstudianteResponse(estudiante);
            }
            catch (Exception e)
            {
                return new GuardarEstudianteResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }
        
    }
     public class GuardarEstudianteResponse 
    {
        public GuardarEstudianteResponse(Estudiante estudiante)
        {
            Error = false;
            Estudiante = estudiante;
        }
        public GuardarEstudianteResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Estudiante Estudiante { get; set; }

    }
}