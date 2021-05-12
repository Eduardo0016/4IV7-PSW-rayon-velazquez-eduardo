/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/**
 *
 * @author YO
 */
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Driver;
import java.sql.DriverManager;
import javax.servlet.ServletConfig;


//Librerias para conectar con DataBase
import java.sql.Connection; //----> Conecta con la db
import java.sql.Statement;  //----> Se encarga de hacer operaciones como : Insert, Delate, Update, Create, Alter, Drop
import java.sql.ResultSet;  //----> Genera un objeto para poder realizar consultas sql









public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    //Variables Globales
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //constructor
    
    
    @Override
    public void init(ServletConfig cfg) throws ServletException{
        //Como se va aconectar a la bd
        
        String url="jdbc:mysql:3306//localhost/registro4iv7";
                   //driver:gestorbd:puerto//IP/nombrebd
        String username="IVAN";
        String password="3.141516Ivan003";
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            //A veces el tipo de driver ya tiene el puerto y arroja un error, para resolverlo quitamos el puerto
            //jdbc:mysql://localhost/registro4iv7
            
            con=DriverManager.getConnection(url,username,password);
            set=con.createStatement();
            System.out.println("Conección exitosa");
            
        } catch (Exception e) {
            System.out.println("Conección no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
        
    }

    
    
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            String nom, appat, apmat, correo, ip, ipr;
            int edad, puerto, puertor;
            
            
            nom=request.getParameter("nombre");
            appat=request.getParameter("appat");
            apmat=request.getParameter("apmat");
            correo=request.getParameter("correo");
            edad=Integer.parseInt( request.getParameter("edad"));
            ip=request.getLocalAddr();
            puerto=request.getLocalPort();
            
            ipr=request.getRemoteAddr();
            puertor=request.getRemotePort();
            
            
            //vamos a intentar registrar en la db
            
            
            try {
             
                /*para registrar a un usuario debemos  usar insert bajo el sig. esquema
                
                insert into nombreTable (atributo1,atrubuto2,...) values("val1", 'val2', ...);
                
                "" tipo cadena
                '' numerico
                nada (valor2) es numerico
                
                */
                
                String q="inset into mregistro (nom_usu, appat_usu, apmat_usu, edad_usu, email_usu)"
                        + "values ('"+nom+"', '"+appat+"', '"+apmat+"', "+edad+", '"+correo+"'  )";
                
                
                set.executeUpdate(q);
                System.out.println("Registro exitoso");
                
                
                
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Registro Exitoso</h1>"
                    + "<br>"
                    + "Tu nombre es: "+nom
                    + "<br>"
                    + "Tu apellido Paterno es: "+appat
                    + "<br>"
                    + "Tu apellido Materno es : "+apmat
                    + "<br>"
                    + "Tu edad es: "+edad
                    + "<br>"
                    + "Tu correo es: "+correo
                    + "<br>"
                    + "PuertoLocal: "+puerto
                    + "<br>"
                    + "Ip: "+ip
                    + "<br>"
                    + "puerto Remoto: "+puertor
                    + "<br>"
                    + "Ip remota: "+ipr
                    + "<br>"
                    + "<a href='index.html'>Regresar</a>");
            out.println("</body>");
            out.println("</html>");
            } catch (Exception e) {
                System.out.println("Error al registrar en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Registro NO Exitoso</h1>"
                    + "<br>"
                    + "Detalles: "
                    + "<br>"
                    + "<a href='index.html'>Regresar</a>");
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

