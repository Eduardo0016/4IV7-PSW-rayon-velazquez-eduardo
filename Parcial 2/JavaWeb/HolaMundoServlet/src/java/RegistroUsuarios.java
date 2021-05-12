/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.servlet.ServletConfig;
import java.sql.DriverManager;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

/**
 *
 * @author YO
 */
public class RegistroUsuarios extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;

    @Override
    public void init(ServletConfig cfg) throws ServletException {

        String url = "jdbc:mysql:3306//localhost/registro4iv7";
        String username = "root";
        String password = "EIRV.JQR@2aM";
        url = "jdbc:mysql://localhost/registro4iv7";
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            set = con.createStatement();

            System.out.println("CONECCION EXITOSA");

        } catch (Exception e) {
            System.out.println("CONECCION NO EXITOSA");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }

    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {

            String nom, appat, apmat, correo;
            int edad;

            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            edad = Integer.parseInt(request.getParameter("edad"));
            correo = request.getParameter("correo");

            try {

                String q = "insert into mregistro (nom_usu, appat_usu, apmat_usu, edad_usu, email_usu) "
                        + "values "
                        + "('" + nom + "', '" + appat + "', '" + apmat + "', " + edad + ", '" + correo + "')";

                set.executeUpdate(q);
                System.out.println("REGISTRO EXITOSO EN LA TABLA");

                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet RegistroUsuarios</title>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Servlet RegistroUsuarios at " + request.getContextPath() + "</h1>"
                        + "<br>"
                        + "<h1>Registro Exitoso</h1>"
                        + "<br>"
                        + "Tu nombre es: " + nom
                        + "<br>"
                        + "Tu Apellido Paterno es: " + appat
                        + "<br>"
                        + "Tu Apellido materno es: " + apmat
                        + "<br>"
                        + "Tu edad es: " + edad
                        + "<br>"
                        + "Tu Correo es: " + correo
                        + "<br>"
                        + "<a href='index.html'>Regresar al menú</a>");
                out.println("</body>");
                out.println("</html>");
            } catch (Exception e) {
                System.out.println("REGISTRO ERRONEO EN LA TABLA");
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet RegistroUsuarios</title>");
                out.println("</head>");
                out.println("<body>"
                        + "<h1>REGISTRO NO EXITOSO, OCURRIO UN ERRO</h1>"
                        + "<br>"
                        + "<a href='index.html'>Menú</a>");
                out.println("</body>");
                out.println("</html>");
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
