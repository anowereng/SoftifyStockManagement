using Sampan;
using System;
using System.Data;
using SoftifyStockManagement.API.Helpers;

namespace SoftifyStockManagement.API.SQL_Query
{
    public class CustomerQuery
    {
        public static DataSet dsList = new DataSet();
        public string GetCustomer(string searchdata)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec prcGet_CustomerList "+ searchdata;
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[0]);
        }
           public string GetCustomerById(int id)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec prcGet_Customer '"+id+"' ";
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[0]);
        }

    }
}