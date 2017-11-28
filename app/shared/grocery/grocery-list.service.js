"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        // return this.http.get(Config.apiUrl + "Groceries", {
        //   headers: headers
        // })
        return this.http.post(config_1.Config.apiUrl, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            console.log("Data:", data);
            console.log("Data 2:", data.json());
            // let groceryList = [];
            // data.Result.forEach((grocery) => {
            //   groceryList.push(new Grocery(grocery.Id, grocery.Name));
            // });
            return data.json();
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFJbkMsSUFBYSxrQkFBa0I7SUFDN0IsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyxpQ0FBSSxHQUFKO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELHNEQUFzRDtRQUN0RCxxQkFBcUI7UUFDckIsS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUM7YUFDQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQyx3QkFBd0I7WUFDeEIscUNBQXFDO1lBQ3JDLDZEQUE2RDtZQUM3RCxNQUFNO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUVlLFdBQUk7R0FEbkIsa0JBQWtCLENBOEI5QjtBQTlCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiLCB7XHJcbiAgICAvLyAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgIC8vIH0pXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmFwaVVybCwge1xyXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICB9KVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIDI6XCIsIGRhdGEuanNvbigpKTtcclxuICAgICAgICAvLyBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuICAgICAgICAvLyBkYXRhLlJlc3VsdC5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XHJcbiAgICAgICAgLy8gICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBHcm9jZXJ5KGdyb2NlcnkuSWQsIGdyb2NlcnkuTmFtZSkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxufSJdfQ==