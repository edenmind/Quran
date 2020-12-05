using System;

using api.Models;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace api {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private static readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            var connectionString = Environment.GetEnvironmentVariable ("ASPNETCORE_CONNECTION_STRING");
            var origins = Environment.GetEnvironmentVariable ("ASPNETCORE_ORIGINS");

            services.AddDbContext<Context> (options =>
                options.UseSqlServer (connectionString));

            services.AddControllers ();
            services.AddCors (options => {
                options.AddPolicy (name: MyAllowSpecificOrigins, builder => {
                    builder.WithOrigins (origins);
                    builder.AllowAnyMethod ();
                    builder.AllowAnyHeader ();
                });
            });
            services.AddSwaggerGen ();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }

            app.UseHttpsRedirection ();

            app.UseSwagger ();

            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/v1/swagger.json", "Quran");
                c.RoutePrefix = string.Empty;
            });

            app.UseRouting ();

            app.UseCors (MyAllowSpecificOrigins);

            app.UseAuthorization ();

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });
        }
    }
}
