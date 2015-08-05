package controllers;

import javax.sql.*;

import java.sql.*;

import play.db.*;

public class DatabaseController {

	public static final DataSource ds = DB.getDataSource();
	
	public static ResultSet runSQLQ(String sql) throws SQLException {
		Connection c = ds.getConnection();
		PreparedStatement statement = c.prepareStatement(sql);
		c.close();
		return statement.executeQuery();
	}
	
	public static int runSQLU(String sql) throws SQLException {
		Connection c = ds.getConnection();
		PreparedStatement statement = c.prepareStatement(sql);
		c.close();
		return statement.executeUpdate();
	}
	
	/*public static final Database inMem = Databases.inMemory(
	        "inMem",
	        ImmutableMap.of(
	                "MODE", "MYSQL"
	        ),
	        ImmutableMap.of(
	                "logStatements", true
	        )
	);
	
	public static ResultSet runSQLQ(String sql) throws SQLException {
		PreparedStatement statement = inMem.getConnection().prepareStatement(sql);
		return statement.executeQuery();
	}
	
	public static int runSQLU(String sql) throws SQLException {
		PreparedStatement statement = inMem.getConnection().prepareStatement(sql);
		return statement.executeUpdate();
	}
	
	static {
		Runtime.getRuntime().addShutdownHook(new Thread(new Runnable() {
			
			@Override
			public void run() {
				inMem.shutdown();
			}
		}));
	}*/
}
