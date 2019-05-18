using System;
using Sampan;
using System.Data;
using System.Collections;
using System.Linq.Expressions;
using SoftifyStockManagement.API.Models;
using SoftifyStockManagement.API.Helpers;
namespace SoftifyStockManagement.API.SQL_Query
{
    public class SupplierQuery
    {
        public static DataSet dsList = new DataSet();
        public string GetSupplier()
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec [prcGet_Supplier] 0,0,'' ";
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[0]);
        }
        public string GetCombo()
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec [prcGet_Supplier] 0,0,'' ";
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[1]);
        }

         public string GetSupplierById(int supplierid)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec [prcGet_Supplier] 0,'"+supplierid+"','' ";
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[0]);
        }
        public string SupplierAdd(Supplier model)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();
            var Query = "SELECT  cast(Isnull(MAX(SupplierId),0) + 1 AS float)  AS SupplierId FROM tblCat_Supplier";
            var NewId = CoreSQL.CoreSQL_GetDoubleData(Query);

                var sqlQuery = "Insert Into tblCat_Supplier (SupplierId,SupplierCode, SupplierName, SupplierAddress, SupplierPhone, ContactName, ContactPhone, ContactEmail, SupplierLocation, ComId)" +
                               " Values ('" + NewId + "','" + NewId + "','" + model.name + "','" + model.address + "','" + model.phone + "', '" + model.reptname + "','" + model.reptphone + "','','" + model.location + "',2)";
                arrayList.Add(sqlQuery);
                CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
                return "Success";
            }
    }
}