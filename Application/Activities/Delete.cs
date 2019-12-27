using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using System.Net;

namespace Application.Activities
{
    class Delete
    {
        public class Command : IRequest
           {
                public Guid Id { get; set; }

            }
        public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;
        
                public Handler(DataContext context)
                    {
                        _context = context;
        
                    }
        
        
                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                    {

                        var activity = await _context.Activitie.FindAsync(request.Id);
                          if (activity == null)
                                throw new RestException(HttpStatusCode.NotFound, new{activity 
                                = "not found"});
                          _context.Remove(activity);
                        

                        var success = await _context.SaveChangesAsync() > 0;
        
                        if (success) return Unit.Value;
        
                        throw new Exception("problem saving changes");
                    }
                }    
        
    }
}
