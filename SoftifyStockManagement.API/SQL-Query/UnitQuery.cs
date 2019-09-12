using System;
using Sampan;
using System.Data;
using System.Collections;
using System.Linq.Expressions;
using SoftifyStockManagement.API.Models;
using SoftifyStockManagement.API.Helpers;
namespace SoftifyStockManagement.API.SQL_Query
{
    public class UnitQuery
    {
        public static int ComId=2;
        public static DataSet dsList = new DataSet();
        public string GetUnit()
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            dsList = new DataSet();
            string strQuery = "Exec [prcGetUnit] '"+ ComId + "', 0 ";
            dsList = CoreSQL.CoreSQL_GetDataSet(strQuery);
            return clsCommon.JsonSerialize(dsList.Tables[0]);
        }

        public string UnitAdd(Unit model)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();
            var Query = "SELECT  cast(Isnull(MAX(UnitId),0) + 1 AS float)  AS UnitId FROM tblUnit";
            var NewId = CoreSQL.CoreSQL_GetDoubleData(Query);

                var sqlQuery = "Insert Into tblUnit (UnitId, UnitName, ComId)" +
                               " Values ('" + NewId + "','" + model.UnitName + "','"+ ComId + "')";
                arrayList.Add(sqlQuery);
                CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
                return "Success";
            }

        public string UnitUpdate(Unit model)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();

            var sqlQuery = "Update tblUnit set UnitName = '" + model.UnitName + "' where UnitId = '" + model.UnitId + "'";
                          
            arrayList.Add(sqlQuery);
            CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
            return "Success";
        }

        public string UnitDelete(int Id)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();

            var sqlQuery = "Delete tblUnit where  supplierid = '" + Id + "'";
                          
            arrayList.Add(sqlQuery);
            CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
            return "Success";
        }
    }
}