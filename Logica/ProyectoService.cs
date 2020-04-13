using System;
using Datos;
using Entity;
using System.Collections.Generic;

namespace Logica
{
    public class ProyectoService
    {
        private readonly ConnectionManager _conexion;
        private readonly ProyectoRepository _repositorio;

        public ProyectoService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new ProyectoRepository(_conexion);
        }
        
        public GuardarProyectoResponse Guardar(Proyecto proyecto)
        {
            try
            {
                _conexion.Open();
                _repositorio.Guardar(proyecto);
                _conexion.Close();
                return new GuardarProyectoResponse(proyecto);
            }
            catch (Exception e)
            {
                return new GuardarProyectoResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }
        
    }
     public class GuardarProyectoResponse 
    {
        public GuardarProyectoResponse(Proyecto proyecto)
        {
            Error = false;
            Proyecto = proyecto;
        }
        public GuardarProyectoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Proyecto Proyecto { get; set; }

    }
}