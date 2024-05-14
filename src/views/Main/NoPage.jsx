const NoPage = () => {

  const quotes = [
    {
      quote:"You're right nice, but you ain't got enough punch for me. I like women what could take my face clean off with a roundhouse.",
      author:"Wayne"
    },
    {
      quote:"Ain`t no fellow who regretted giving it one extra shake, but you can bet every guy has regretted giving one too few.",
      author:"Wayne"
    },
    {
      quote:"He is dead, young lady. I am sorry for your loss. Yes, he was simply too handsome, too clever, and immensely remarkable in all aspects of his existence to be allowed to live. I'm afraid it took a hundred men to bring him down, and he killed all but one. His last words were 'Tell Wax that he's a total git, and he still owes me five notes.'",
      author:"Wayne"
    
    },
    {
      quote:"I need you to stay behind as we go into those slums. It's not that I don’t want your help. I do. It's going to be too dangerous for you. You need to stay where I know you're safe. No arguments! I'm sorry.",
      author:"Wayne, speaking to his lucky hat"
    
    },
    {
      quote:"I ain't drunk. I'm investigatin' alternative states of sobriety.",
      author:"Wayne"
    
    },
    {
      quote:"You didn't promise to kill me. You promised to have killed me. That there be the present perfect tense.",
      author:"Wayne"
    
    },
    {
      quote:"Well, Wayne. At least you ain't a broke, dickless feller what can't even pick his own nose properly.",
      author:"Wayne"
    
    },
    {
      quote:"How am I to know how your devious criminal genius mind works mate?",
      author:"Wayne"
    
    },
    {
      quote:"You're meant to be helping people.",
      author:"Wayne"
    
    },
    {
      quote:"If you're always on time, it implies that you never have anything better you should be doing. ",
      author:"Kelsier"
    
    },
    {
      quote:"When you remember me, please remember that. Remember to smile.",
      author:"Kelsier"
    
    },
    {
      quote:"You want to be like me, Spook? Really like me? Then fight when you are beaten!",
      author:"Kelsier"
    
    },
    {
      quote:"There's always another secret.",
      author:"Kelsier"
    
    },
    {
      quote:"Ah, but being an annoyance is something that I am very good at. In fact, I’m far more than just a mild annoyance. People tell me I can be downright frustrating! Might as well use that talent for the cause of good eh?",
      author:"Kelsier"
    
    },
    {
      quote:"I already overthrew one government. I figure that takes care of my 'civic duty' for a while.",
      author:"Vin"
    }
  ]

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomItem = quotes[randomIndex];

    return (
      <>
      <div>
        <div id="secret">
        <br/>
        <h3 style={{ textAlign: 'left' }}>Wait, you aren`t supposed to be here! This is behind the scene! There`s things in the cosmere you aren`t supposed to see!</h3>
        <h3 style={{ textAlign: 'left' }}>Anyway, here`s a random quote.</h3>
          <h3 style={{ textAlign: 'left' }}>&quot;{randomItem.quote}&quot;</h3> 
          <h3 className="notButter" style={{ textAlign: 'right', paddingRight: '40px' }}>- {randomItem.author} </h3>
        </div>
      </div>
      </>
    );
  };
  
export default NoPage;